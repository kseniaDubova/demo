// api.js
const BOT_TOKEN = '';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

export default class Api {

    async getUpdates() {
        try {
            const response = await fetch(`${TELEGRAM_API_URL}/getUpdates`);
            const data = await response.json();
            
            if (!data.ok) {
                throw new Error('Ошибка получения обновлений из Telegram');
            }
    
            return data.result;
        } catch (error) {
            console.error('Ошибка:', error);
            return null;
        }
    }
}