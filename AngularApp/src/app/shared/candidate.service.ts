import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { toPromise } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Candidate } from './candidate.model';

@Injectable()
export class CandidateService {
  selectedCandidate: Candidate;
  candidates: Candidate[];
  readonly baseURL = 'https://election-backend.herokuapp.com/';

  constructor(public http: HttpClient) { }

  postCandidate(can: Candidate) {
    return this.http.post(this.baseURL, can);
  }

  getCandidateList() {
    return this.http.get(this.baseURL);
  }

  putCandidate(can: Candidate) { 
    return this.http.put(this.baseURL + `/${can._id}`, can);
  }

  deleteCandidate(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}