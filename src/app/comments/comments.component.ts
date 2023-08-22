import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../models/User";

export interface Comments {
  text: string;
  name: string;
}


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  constructor(private auth: AuthService, private router: Router) {
  }

  value = '';
  name = ''

  comments: Comments[] = [
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
        '\n', name: 'Teste'
    },
    {
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
        '\n!', name: 'Fulano da Silva'
    },
  ];

  enviaComment() {
    if (this.value !== '') {
      const newComment: Comments = {
        text: this.value,
        name: this.name,
      };
      this.comments.push(newComment);
      this.value = '';
    }
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
