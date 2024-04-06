import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  id!: number;
  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserById();
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToUserList();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  redirectToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user);
    this.updateUser();
  }

  private getUserById() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
