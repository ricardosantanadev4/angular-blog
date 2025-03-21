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
        { codigo: 2, nome: 'Is Film Photography Really Making a...', duracao: '1:02' },
        { codigo: 3, nome: 'Behind the Scenes of Galleries: How...', duracao: '0:42' },
        { codigo: 4, nome: 'Culture Online: Can Digital Replace t...', duracao: '1:02' },
        { codigo: 5, nome: 'Music as Therapy: How Sounds influ...', duracao: '0:42' },
      ]
    }
}