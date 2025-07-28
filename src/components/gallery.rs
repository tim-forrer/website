use dioxus::prelude::*;

#[component]
pub fn Gallery() -> Element {
    rsx!(
        div {
            id: "gallery",
            p { "Here are a collection of my photographs, taken using a Nikon Zf, often paired with the NIKKOR Z f/2 40mm." }
            img { src: "https://images.unsplash.com/photo-1753577705738-eefc00f4b0fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    })
}
