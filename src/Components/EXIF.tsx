import { Group, Text } from "@mantine/core"

function EXIF(props:any) {

    const info = props.info

    return (
        <div>
        {
            Object.keys(info).map((key: any, i: any) => (
                <Group position="apart">
                    <Text fz='xs' italic>{key}</Text>
                    <Text fz='xs'>{info[key]}</Text>
                </Group>
            ))
        }
        </div>
    )
}

export default EXIF