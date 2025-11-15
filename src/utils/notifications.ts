import { notifications } from '@mantine/notifications';

type notificationActionType = 'addToFav' | 'removeFromFav';

const NOTIFICATION_CONFIG = {
    addToFav: {
        title: 'Added to favorites',
        message: 'Pokémon has been added to your favorites.',
        color: 'green',
    },
    removeFromFav: {
        title: 'Removed from favorites',
        message: 'Pokémon has been removed from your favorites.',
        color: 'red',
    },
};

export function showNotification(action: notificationActionType) {
    const config = NOTIFICATION_CONFIG[action];

    notifications.show({
        title: config.title,
        message: config.message,
        color: config.color,
        withBorder: true,
        autoClose: 1500,
    });
}
