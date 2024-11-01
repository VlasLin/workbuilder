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
func hoby(w http.ResponseWriter, r *http.Request) {
	view, _ := template.ParseFiles("hoby.html")
	//data : = "hello world"
	view.Execute(w, nil)
}
func carer(w http.ResponseWriter, r *http.Request) {
	view, _ := template.ParseFiles("carer.html")
	//data : = "hello world"
	view.Execute(w, nil)
}
func zvo(w http.ResponseWriter, r *http.Request) {
	view, _ := template.ParseFiles("zvo.html")
	//data : = "hello world"
	view.Execute(w, nil)
}
func contact(w http.ResponseWriter, r *http.Request) {
	view, _ := template.ParseFiles("contact.html")
	//data : = "hello world"
	view.Execute(w, nil)
}
