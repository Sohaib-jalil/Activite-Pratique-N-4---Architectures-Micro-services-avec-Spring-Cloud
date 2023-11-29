import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orders: any;
  customerId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.customerId = route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:9999/order-service/orders/search/byCustomerId?customerId=${this.customerId}&projection=fullOrder`).subscribe({
      next: (data) => {
        this.orders = data;
        console.log(this.orders);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getOrderDetails(order: any) {
    this.router.navigate(['order-details', order.id]);
  }
}
