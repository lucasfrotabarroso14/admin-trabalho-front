import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MessageService]
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  isEditing: boolean = false;
  editingUser: any = {
    name: '',
    email: '',
  };

  constructor(private http: HttpClient, private authService: AuthService, private location: Router, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  editarUsuario(usuario: any) {
    this.isEditing = true;
    this.editingUser = { ...usuario }; // Copia os dados do usuário para edição
  }

  salvarEdicao() {
    this.http.put<any>(`http://localhost:8000/users/${this.editingUser.id}`, this.editingUser)
      .subscribe(
        (response) => {
          this.messageService.add({
            summary: "Usuário editado com sucesso",
            severity: "success"
          })
          this.isEditing = false
          this.getUsers()
        },
        (error) => {
          this.messageService.add({
            summary: 'Erro ao editar usuário: ' + error,
            severity: "error"
          })
        }
      );
  }

  getUsers() {
    this.http.get<any[]>('http://localhost:8000/users')
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => {
          this.messageService.add({
            summary: 'Erro ao buscar usuários:' + error,
            severity: "error"
          })
        }
      );
  }

  excluirUsuario(usuario: any) {
    this.authService.deleteUser(usuario.id).subscribe(
      (response) => {
        this.messageService.add({
          summary: "Usuário excluído com sucesso",
          severity: "info"
        })
        this.getUsers(); // Atualiza a lista de usuários após a exclusão
      },
      (error) => {
        this.messageService.add({
          summary: 'Erro ao excluir usuário:' + error,
          severity: "error"
        })
      }
    );
  }
}
