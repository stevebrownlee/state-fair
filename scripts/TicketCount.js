const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 0

const ticketPurchased = () => {
    totalTickets++

    contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
}

export const TicketCount = () => {
    contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
    eventHub.addEventListener("rideTicketPurchased", ticketPurchased)
    eventHub.addEventListener("foodTicketPurchased", ticketPurchased)
    eventHub.addEventListener("sideshowTicketPurchased", ticketPurchased)
    eventHub.addEventListener("gameTicketPurchased", ticketPurchased)
    eventHub.addEventListener("packageTicketPurchased", ticketPurchased)
}