import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CAREER_PATHS, ROLE_SKILLS } from '../../data/career-data';
import { CareerPath, RoleSkills } from '../../types/career';

@Component({
  selector: 'app-career-path',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-path.component.html',
  styleUrls: ['./career-path.component.css']
})
export class CareerPathComponent implements OnInit {
  @Input() currentRole: string = '';
  @Input() skills: string[] = [];
  
  possibleNextRoles: { role: string, skillsMet: number, skillsToLearn: number, skillsToLearnList: string[] }[] = [];

  ngOnInit() {
    this.calculateCareerPath();
  }

  calculateCareerPath() {
    const currentPath = CAREER_PATHS.find(path => path.role === this.currentRole);
    if (!currentPath) return;

    const currentSkills = new Set(this.skills);
    
    this.possibleNextRoles = currentPath.nextRoles.map(nextRole => {
      const targetSkills = ROLE_SKILLS.find(rs => rs.role === nextRole)?.skills || [];
      const skillsToLearnList = targetSkills.filter(skill => !currentSkills.has(skill));
      
      return {
        role: nextRole,
        skillsMet: targetSkills.length - skillsToLearnList.length,
        skillsToLearn: skillsToLearnList.length,
        skillsToLearnList: skillsToLearnList
      };
    });
  }
}
