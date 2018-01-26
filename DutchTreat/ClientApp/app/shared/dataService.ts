import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import "rxjs/add/operator/map";
import { Product } from "./product";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    private token: string = "";
    private tokenExpiration: Date;
    public products: Product[] = [];
    public order: Order = new Order();

    public loadProducts(): Observable<Product[]> {
        return this.http.get("/api/products")
            .map(res => {
                this.products = <Product[]>res;
                return <Product[]>res;
            });
    }

    public addToOrder(product: Product) {
        let item: OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();

            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);
        }
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public login(creds): Observable<boolean> {
        return this.http.post("/account/createtoken", creds)
            .map((response: any) => {
                let tokenInfo = response;
                //response.json().then(val => tokenInfo = val).catch(console.log);
                this.token = tokenInfo.token;
                console.log(this.token);
                this.tokenExpiration = tokenInfo.expiration;

                return true;
            }) as any;
    }
}