﻿using DutchTreat.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchRepository : IDutchRepository
    {
        private readonly DutchContext _context;
        private readonly ILogger<DutchContext> _logger;

        public DutchRepository(DutchContext context, ILogger<DutchContext> logger)
        {
            _context = context;
            _logger = logger;
        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public void AddOrder(Order newOrder)
        {
            // Convert new products to lookup of product
            foreach (var item in newOrder.Items)
            {
                item.Product = _context.Products.Find(item.Product.Id);
            }

            AddEntity(newOrder);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                           .Include(o => o.Items)
                           .ThenInclude(i => i.Product)
                           .ToList();
            }
            else
            {
                return _context.Orders
                               .ToList();
            }
        }

        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                           .Where(o => o.User.UserName == username)
                           .Include(o => o.Items)
                           .ThenInclude(i => i.Product)
                           .ToList();
            }
            else
            {
                return _context.Orders
                               .Where(o => o.User.UserName == username)
                               .ToList();
            }
        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("GetAllProducts called");

                return _context.Products
                               .OrderBy(p => p.Title)
                               .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public Order GetOrderById(string username, int id)
        {
            return _context.Orders
                           .Include(o => o.Items)
                           .ThenInclude(i => i.Product)
                           .Where(o => o.Id == id && o.User.UserName == username)
                           .FirstOrDefault();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _context.Products
                           .Where(p => p.Category == category)
                           .ToList();
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
