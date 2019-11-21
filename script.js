var request = new XMLHttprequest
request.onreadystatechange = function (event) {
  this.readystate ===4 ? this.status === 200 ?
    console.log(this.responseText):
      console.warn('error request) : null
}
request("GET", "./user.json")
request.set()
