import queryString from "query-string";

export const endpoint = "https://accounts.spotify.com/authorize?"
const clientID = "411c147475a14012b858715b9b227c3a"
export const parameters = queryString.stringify({
    client_id: clientID,
    response_type: "token",
    redirect_uri: "http://localhost:5173"
})

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
}

