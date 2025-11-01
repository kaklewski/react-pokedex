import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core';
import { IconBrightnessFilled, IconMoon, IconSun } from '@tabler/icons-react';
import { useState } from 'react';

type themeType = 'dark' | 'light' | 'auto';

export default function ThemeSelect() {
    const { setColorScheme } = useMantineColorScheme();
    const [currentTheme, setCurrentTheme] = useState<themeType>('auto');

    function changeTheme(theme: themeType) {
        setColorScheme(theme);
        setCurrentTheme(theme);
    }

    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon
                    color="light"
                    variant="subtle"
                    aria-label="Change theme"
                >
                    {currentTheme === 'auto' && <IconBrightnessFilled />}
                    {currentTheme === 'light' && <IconSun />}
                    {currentTheme === 'dark' && <IconMoon />}
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Choose theme</Menu.Label>
                <Menu.Item
                    leftSection={<IconBrightnessFilled size={14} />}
                    onClick={() => changeTheme('auto')}
                >
                    Auto
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconSun size={14} />}
                    onClick={() => changeTheme('light')}
                >
                    Light
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconMoon size={14} />}
                    onClick={() => changeTheme('dark')}
                >
                    Dark
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
