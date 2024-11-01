package main

import (
	"html/template"
	"net/http"
)

func main() {
	http.HandleFunc("/", Index)
	http.ListenAndServe(":8080", nil)
}

func Index(w http.ResponseWriter, r *http.Request) {
	view, _ := template.ParseFiles("index.html")
	//data : = "hello world"
	view.Execute(w, nil)
}
