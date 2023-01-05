import { AppShell, Button, Footer, Group, Header, Navbar, ScrollArea, Slider, Text } from "@mantine/core";
import { useState } from "react";
import Browser from "./Browser";
import Content from "./Content";
import Inspector from "./Inspector";
import { Outlet } from 'react-router-dom'

function Shell() {
    const [thumbSize, setThumbSize] = useState(1);
    const MARKS = [
        { value: 1, label: 'sm' },
        { value: 2, label: 'md' },
        { value: 3, label: 'lg' },
        { value: 4, label: 'xl' },
      ];

    return (
        <AppShell 
            padding='md'
            header={<Header height={50}>
                {
                <Group position="apart">
                    <Text>Test</Text>
                    <Text>Test2</Text>
                    <Text>Test3</Text>
                </Group>
                }
            </Header>}
            footer={<Footer height={50} fixed>
                {
                    <Group position="apart">
                    <Button compact mt="xs" ml="lg">New Collection</Button>
                    <Slider mt="xs" mb="xs" sx={{width:500}}
                        defaultValue={1}
                        marks={MARKS}
                        min={1}
                        max={4}
                        step={1}
                        onChange={setThumbSize}
                        />
                    <Button compact mt="xs" mr="lg">Import</Button>
                    </Group>
                }
            </Footer>}
            navbar={<Navbar p="xs" withBorder width={{base:200}}>
                <Navbar.Section mt="xs" fz={'sm'}>Browser Top</Navbar.Section>
                <Navbar.Section fz={'xs'} grow component={ScrollArea} mt="md"><Browser /></Navbar.Section>
                <Navbar.Section fz={'sm'}>Trash</Navbar.Section>
            </Navbar>}
            >
                <Outlet context={thumbSize}/>
        </AppShell>
    )
}

export default Shell