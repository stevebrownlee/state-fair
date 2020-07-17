const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        eventHub.dispatchEvent(new CustomEvent("rideTicketPurchased"))
    }
    else if (clickEvent.target.id === "foodTicket") {
        eventHub.dispatchEvent(new CustomEvent("foodTicketPurchased"))
    }
    else if (clickEvent.target.id === "gameTicket") {
        eventHub.dispatchEvent(new CustomEvent("gameTicketPurchased"))
    }
    else if (clickEvent.target.id === "sideshowTicket") {
        eventHub.dispatchEvent(new CustomEvent("sideshowTicketPurchased"))
    }
    else if (clickEvent.target.id === "packageTicket") {
        eventHub.dispatchEvent(new CustomEvent("packageTicketPurchased"))
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="packageTicket">Full Package Ticket</button>
        </div>
    `
}