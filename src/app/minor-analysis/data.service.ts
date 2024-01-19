import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  in_sem_val: any;
  in_exam: any;
  URI = `${environment.API_URL}`;

  constructor(private _http: HttpClient) { }

  getAnalysis() {
    return this._http.get(`${this.URI}/analysis`, { withCredentials: true });
  }
  getCourses() {
    return this._http.get(`${this.URI}/get_courses`, { withCredentials: true });
  }

  getDUGC(sem_type: string, semester: string, exam: string) {
    return this._http.get(`${this.URI}/dugc`, {
      params: { sem_type, semester, exam },
    });
  }

  getCoordinator(data_file: string, course_file: string) {
    return this._http.get(`${this.URI}/coordinator`, {
      params: { data_file, course_file },
    });
  }

  uploadSheets(data: any) {
    const {
      academic_year,
      sem_type,
      semester,
      course,
      exam,
      section,
      filename,
    } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    return this._http.post(`${this.URI}/upload_sheets`, data, {
      withCredentials: true,
    });
  }

  createCourse(data: any) {
    const { semester, course_code, course_name, cred1, cred2, cred3 } = data;
    return this._http.get(`${this.URI}/create_course`, {
      params: {
        semester,
        course_code,
        course_name,
        cred1,
        cred2,
        cred3,
      },
      withCredentials: true,
    });
  }

  deleteSheet(data: any) {
    const { academic_year, semester, course, exam, section } = data;
    return this._http.get(`${this.URI}/delete_sheet`, {
      params: {
        academic_year,
        semester,
        course,
        exam,
        section,
      },
      withCredentials: true,
    });
  }

  uploadMultipleSheets(data: any) {
    const { academic_year, sem_type, semester, course, exam, filename } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    return this._http.post(`${this.URI}/upload_multiple_sheets`, data, {
      withCredentials: true,
    });
  }

  setFileHeader() {
    return new HttpHeaders({
      Accept: 'application/json',
    });
  }
  uploadFile(fileToUpload: File) {
    console.log('on service');
    console.log(fileToUpload);
    let fd = new FormData();
    fd.append('filename', fileToUpload, fileToUpload.name);
    return this._http.post(`${this.URI}/upload_file`, fd, {
      headers: this.setFileHeader(),
      withCredentials: true,
    });
  }


  uploadFileInE(fileToUpload: File) {
    console.log('on service');
    console.log(fileToUpload);
    let fd = new FormData();
    fd.append('filename', fileToUpload, fileToUpload.name);
    return this._http.post(`${this.URI}/upload_InE`, fd, {
      headers: this.setFileHeader(),
      withCredentials: true,
    });
  }
  uploadEmail11(fileToUpload: File) {
    console.log('on service');
    console.log(fileToUpload);
    let fd = new FormData();
    fd.append('filename', fileToUpload, fileToUpload.name);
    return this._http.post(`${this.URI}/upload_Email`, fd, {
      headers: this.setFileHeader(),
      withCredentials: true,
    });
  }

  uploadlist(data: any) {
    const { sem, type, filename } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this._http.post(`${this.URI}/uploadTheory`, data, {
      withCredentials: true,
    });
  }

  uploadlist1(data: any) {
    const { sem, filename } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this._http.post(`${this.URI}/uploadTheory`, data, {
      withCredentials: true,
    });
  }

  uploadEmail(data: any) {
    const { email, message, filename } = data;
    console.log('Making a get request', data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this._http.post(`${this.URI}/uploadEmail`, data);
  }

  getTheoryBySem(sem: number): Observable<any> {
    console.log("Hi in dataservice");
    return this._http.get(`${this.URI}/getTheoryBySem/${sem}`);
  }



  getTheoryBySem1(sem: number, type: string): Observable<any> {
    return this._http.get(`${this.URI}/getTheoryBySem/${sem}/${type}`);
  }
}
