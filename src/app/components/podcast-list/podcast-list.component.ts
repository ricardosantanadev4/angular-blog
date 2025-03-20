import { Component } from '@angular/core';
import { IPlaylist } from '../../shared/models/playlist.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-podcast-list',
  imports: [NgFor],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.scss'
})
export class PodcastListComponent {

  playlist: IPlaylist =
    {
      codigo: 1,
      nome: 'The Creative Pulse',
      audios: [
        { codigo: 1, nome: 'Art in the City: How modem Sculptur...', duracao: '0:54' },
        { codigo: 2, nome: 'Áudio-2', duracao: '1:02' },
        { codigo: 3, nome: 'Áudio-3', duracao: '0:42' },
      ]
    }
}
