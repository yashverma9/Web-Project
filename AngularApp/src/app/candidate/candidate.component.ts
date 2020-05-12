import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CandidateService } from '../shared/candidate.service';
import { Candidate } from '../shared/candidate.model';

declare var M: any;

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  providers: [CandidateService]
})
export class CandidateComponent implements OnInit {

  candidateForm;

  constructor(public candidateService: CandidateService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCandidateList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.candidateService.selectedCandidate = {
      _id: "",
      can_id: "",
      name: "",
      age: null,
      constituency: "",
    }
  }

  onSubmit(form: NgForm) {
    window.location.reload()
    if (form.value._id == "") {
      this.candidateService.postCandidate(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCandidateList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.candidateService.putCandidate(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCandidateList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCandidateList() {
    this.candidateService.getCandidateList().subscribe((res) => {
      this.candidateService.candidates = res as Candidate[];
    });
  }

  onEdit(can: Candidate) {
    this.candidateService.selectedCandidate = can;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.candidateService.deleteCandidate(_id).subscribe((res) => {
        this.refreshCandidateList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}