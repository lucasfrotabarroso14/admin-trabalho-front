import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  editingUser: any = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUsers(); 
  }

  editarUsuario(usuario: any) {
    this.editingUser = { ...usuario }; // Copia os dados do usuário para edição
  }

  salvarEdicao() {
    this.http.put<any>(`http://localhost:8000/users/${this.editingUser.id}`, this.editingUser)
      .subscribe(
        (response) => {
          console.log('Usuário editado:', response);
          alert("Usuário editado com sucesso");
          this.editingUser = null; // Limpa os dados do usuário em edição
          this.getUsers(); // Atualiza a lista de usuários
        },
        (error) => {
          console.error('Erro ao editar usuário:', error);
        }
      );
  }

  cancelarEdicao() {
    this.editingUser = null; // Limpa os dados do usuário em edição
  }

  getUsers() {
    this.http.get<any[]>('http://localhost:8000/users')
      .subscribe(
        (response) => {
          this.users = response;
          console.log(this.users);
        },
        (error) => {
          console.error('Erro ao buscar usuários:', error);
        }
      );
  }

  excluirUsuario(usuario: any) {
    this.authService.deleteUser(usuario.id).subscribe(
      (response) => {
        console.log('Usuário excluído:', response);
        alert("Usuario removido com sucesso")
        this.getUsers(); // Atualiza a lista de usuários após a exclusão
      },
      (error) => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }
}
