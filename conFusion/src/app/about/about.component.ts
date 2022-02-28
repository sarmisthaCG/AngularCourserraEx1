import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[] = LEADERS;
  selectedLeader: Leader | undefined ;

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaders = this.leaderService.getLeaders();
  }
  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

}
