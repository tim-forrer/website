use dioxus::prelude::*;

#[component]
pub fn Gallery() -> Element {
    rsx!(
        div { class: "grid grid-cols-1 gap-10", id: "gallery",
            p {
                "Here are a collection of my photographs, taken using a Nikon Zf, often paired with the NIKKOR Z f/2 40mm."
            }
            img {
                class: "max-w-7/8 bg-white dark:bg-black p-2 sm:p-5 m-auto",
                src: "https://images.unsplash.com/photo-1759285439321-3b97745daafa?q=80&w=2354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }
            img {
                class: "max-w-7/8 bg-white dark:bg-black p-2 sm:p-5 m-auto",
                src: "https://images.unsplash.com/photo-1759285439400-a1622ff2fea4?q=80&w=2446&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }
            img {
                class: "max-w-7/8 bg-white dark:bg-black p-2 sm:p-5 m-auto",
                src: "https://images.unsplash.com/photo-1753577705738-eefc00f4b0fc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }
            img {
                class: "max-w-7/8 max-h-1/2 bg-white dark:bg-black p-2 sm:p-5 m-auto",
                src: "https://images.unsplash.com/photo-1759285439292-eb154acd658b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }
        }
    )
}
