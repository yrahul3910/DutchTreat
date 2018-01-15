export class StoreCustomer {
    constructor(private firstName: string, private lastName: string) {
    }

    // Field
    public visits: number = 0;
    private ourName: string;

    // Method
    public showName() {
        alert(this.firstName + " " + this.lastName);
    }

    // Accessors
    get name() {
        return this.ourName;
    }

    set name(val: string) {
        this.ourName = val; // this keyword is required
    }
}