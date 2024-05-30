import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },


   
  ]
  editarUsuario(usuario: any) {
    // Implemente a lógica para editar o usuário aqui
    console.log('Editar usuário:', usuario);
  }

  excluirUsuario(usuario: any) {
    // Implemente a lógica para excluir o usuário aqui
    console.log('Excluir usuário:', usuario);
    this.users = this.users.filter(u => u.id !== usuario.id); // Remove o usuário da lista
  }
}