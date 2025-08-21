use dioxus::prelude::*;

#[component]
pub fn Project(title: String) -> Element {
    rsx!(
        div {
            id: title,
            h1 { "Hello" }
        }
    )
}
