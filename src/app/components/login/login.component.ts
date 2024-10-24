import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loader', { static: true }) loader!: ElementRef;

  private onDestroy$ = new Subject<void>();
  loginTitle: string = 'Bienvenido al gestor de tareas';
  loading: boolean = false;
  loginElements: any[] = [];
  accessDenied: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.loginElements = [
      {
        component: 'bdb-at-input',
        name: 'usuario',
        props: {
          idEl: 'usuario',
          name: 'usuario',
          label: 'Usuario',
          placeholder: 'Ingresa tu usuario',
          type: 'TEXT',
          //formControlName: 'usuario',
          status: 'ENABLED',
          required: 'true',
          message: 'Usuario es requerido',
        },
      },
      {
        component: 'bdb-at-input',
        name: 'contrasena',
        props: {
          idEl: 'contrasena',
          name: 'contrasena',
          label: 'Contraseña',
          placeholder: 'Ingresa tu contraseña',
          type: 'PASSWORD',
          //formControlName: 'contrasena',
          status: 'ENABLED',
          required: 'true',
          message: 'Contraseña es requerida',
        },
      },
    ];
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  login(event: any): void {
    const values = event.detail.reduce((acc: any, item: any) => {
      acc[item.name] = item.value;
      return acc;
    }, {});

    console.log(values);
    this.loader.nativeElement.openLoader();
    this.loginService
      .getAuth(values)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (data) => {
          //console.log(data);
          const token = data.data.  token;
          localStorage.setItem('authToken', token);
          this.loader.nativeElement.closeLoader();

          this.router.navigateByUrl('/taskManager');

        },
        error: (error) => {
          //console.log(error);
          this.loader.nativeElement.c
          this.loader.nativeElement.closeLoader();
          if (error.status) {




            this.toastService.openToast(
              'Error',
              'Usuario o contraseña invalidos.',
              'ERROR'
            );
            return;
          }
          this.toastService.openToast(error.name, error.message, 'ERROR');
        },
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
