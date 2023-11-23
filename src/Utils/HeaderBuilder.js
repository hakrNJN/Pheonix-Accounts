class Headers {
    constructor(token, contentType = 'application/json', accept = '*/*') {
      this.token = token;
      this.contentType = contentType;
      this.accept = accept;
    }
  
    getHeaders() {
      let headers = {
        'Accept': this.accept,
        'Content-Type': this.contentType,
      };
  
      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }
  
      return headers;
    }
}
  
export default Headers