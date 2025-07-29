use crate::Route;
use dioxus::prelude::*;
use dioxus_markdown::Markdown;

const MARKDOWN_SRC: &str = r#"
## Math
- $e^{i\pi} + 1 = 0$
"#;

#[component]
pub fn Home() -> Element {
    rsx! {
        div {
            id: "home",
            h1 {"Tim Forrer"}
            Markdown { src: MARKDOWN_SRC }
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
