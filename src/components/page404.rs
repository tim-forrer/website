use dioxus::prelude::*;

#[component]
pub fn Page404(route: Vec<String>) -> Element {
    rsx! {
        "{route:?} not found"
    }
}
