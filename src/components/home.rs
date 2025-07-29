use crate::Route;
use dioxus::prelude::*;

#[component]
pub fn Home() -> Element {
    rsx! {
        div {
            id: "home",
            h1 {class: "text-5xl", "Tim Forrer"}
            p {"Physics doctoral student at the University of Tokyo."}
            br {  }
            p {"Outside of research, I'm interested in:"}
            ul {
                class: "list-disc pl-5",
                li { "Machine Learning" }
                li {  "Rust" }
                li { Link { class: "hover-df-select dark:hover-nf-select", to: Route::Gallery, "Photography" } }
                li { "Badminton" }
            }
        }
    }
}
