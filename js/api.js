export default async function handler(req, res) {
    try {
        const { action, coin } = req.query;

        const API_KEY = process.env.COINGECKO_API_KEY;

        if (!API_KEY) {
            return res.status(500).json({
                error: "COINGECKO_API_KEY não configurada."
            });
        }

        const headers = {
            "x-cg-demo-api-key": API_KEY
        };

        let endpoint;

        switch (action) {

            // Preço atual
            case "price":
                endpoint =
                    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd,brl`;
                break;

            // Informações completas da moeda
            case "coin":
                endpoint =
                    `https://api.coingecko.com/api/v3/coins/${coin}`;
                break;

            // Lista de moedas
            case "markets":
                endpoint =
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=20&page=1`;
                break;

            // Histórico
            case "history":
                endpoint =
                    `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=brl&days=7`;
                break;

            default:
                return res.status(400).json({
                    error: "Ação inválida."
                });
        }

        const response = await fetch(endpoint, {
            headers
        });

        const data = await response.json();

        return res.status(response.status).json(data);

    } catch (error) {
        return res.status(500).json({
            error: "Erro ao consultar CoinGecko.",
            details: error.message
        });
    }
}