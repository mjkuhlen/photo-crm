import { Grid, Image, AspectRatio, Center, Aside, Divider, ScrollArea } from "@mantine/core"
import { useState } from "react"
import EXIF from "./EXIF"
import { useOutletContext } from "react-router-dom"


function Content() {
    const [info, setInfo] = useState({})
    const [thumb, setThumb] = useState('')
    const thumbSize:number = useOutletContext()
    const data = [
        {
            id:1,
            src:"http://matthewkuhlen.com/koken/storage/cache/images/000/367/DSCF5198,medium_large.1672415893.jpg",
            info:
            {
                "Make": "Canon",
                "Model": "Canon EOS 6D",
                "ExposureTime": "1/125",
                "FNumber": "9.0",
                "ISO": 100,
                "DateTimeOriginal": "2020:06:22 16:34:56",
                "ExposureBiasValue": "0.0",
                "MaxApertureValue": "4.0",
                "MeteringMode": "CenterWeightedAverage",
                "Flash": "Off",
                "FocalLength": "50.0 mm",
                "ColorSpace": "sRGB",
                "ExifImageWidth": 5472,
                "ExifImageHeight": 3648,
                "SensingMethod": "One-chip color area sensor",
                "ExposureMode": "Auto",
                "WhiteBalance": "Auto",
                "FocalLengthIn35mmFormat": "80 mm",
                "SceneCaptureType": "Standard"
              }
        },
        {
            id:2,
            src:"http://matthewkuhlen.com/koken/storage/cache/images/000/366/DSCF5198-Edit,medium_large.1672415891.jpg",
            info:
            {
                "Make": "Nikon",
                "Model": "Nikon D3500",
                "ExposureTime": "1/60",
                "FNumber": "11.0",
                "ISO": 200,
                "DateTimeOriginal": "2022:01:03 10:34:12",
                "ExposureBiasValue": "0.0",
                "MaxApertureValue": "3.5",
                "MeteringMode": "Spot",
                "Flash": "On, Fired",
                "FocalLength": "55.0 mm",
                "ColorSpace": "sRGB",
                "ExifImageWidth": 3936,
                "ExifImageHeight": 2624,
                "SensingMethod": "One-chip color area sensor",
                "ExposureMode": "Manual",
                "WhiteBalance": "Auto",
                "FocalLengthIn35mmFormat": "82.5 mm",
                "SceneCaptureType": "Landscape"
              }              
        },
        {
            id:3,
            src:"http://matthewkuhlen.com/koken/storage/cache/images/000/365/DSCF5171-Edit,medium_large.1672415890.jpg",
            info:
            {
                "Make": "Canon",
                "Model": "Canon EOS 6D",
                "ExposureTime": "1/125",
                "FNumber": "9.0",
                "ISO": 100,
                "DateTimeOriginal": "2020:06:22 16:34:56",
                "ExposureBiasValue": "0.0",
                "MaxApertureValue": "4.0",
                "MeteringMode": "CenterWeightedAverage",
                "Flash": "Off",
                "FocalLength": "50.0 mm",
                "ColorSpace": "sRGB",
                "ExifImageWidth": 5472,
                "ExifImageHeight": 3648,
                "SensingMethod": "One-chip color area sensor",
                "ExposureMode": "Auto",
                "WhiteBalance": "Auto",
                "FocalLengthIn35mmFormat": "80 mm",
                "SceneCaptureType": "Standard"
              }
        },
        {
            id:4,
            src:"http://matthewkuhlen.com/koken/storage/cache/images/000/355/DSCF4271,medium_large.1672415870.jpg",
            info:
            {
                "Make": "Nikon",
                "Model": "Nikon D3500",
                "ExposureTime": "1/60",
                "FNumber": "11.0",
                "ISO": 200,
                "DateTimeOriginal": "2022:01:03 10:34:12",
                "ExposureBiasValue": "0.0",
                "MaxApertureValue": "3.5",
                "MeteringMode": "Spot",
                "Flash": "On, Fired",
                "FocalLength": "55.0 mm",
                "ColorSpace": "sRGB",
                "ExifImageWidth": 3936,
                "ExifImageHeight": 2624,
                "SensingMethod": "One-chip color area sensor",
                "ExposureMode": "Manual",
                "WhiteBalance": "Auto",
                "FocalLengthIn35mmFormat": "82.5 mm",
                "SceneCaptureType": "Landscape"
              }
              
        }
    ]
    

    return (
        <>
        <Aside p="xs" withBorder width={{base:200}}>
            <Aside.Section><Center><Image src={thumb} width={60}/></Center></Aside.Section>
            <Aside.Section grow component={ScrollArea}><Divider variant="dashed" label="EXIF" labelPosition="center"/><EXIF info={info} /></Aside.Section>
            <Aside.Section>Inspector Bottom</Aside.Section>
        </Aside>
            <Grid>
                {data.map((image:any) =>{
                    return (
                        <Grid.Col key={image.id} span={thumbSize}>
                        <AspectRatio ratio={2/3}>
                        <Image
                            onClick={() => {setInfo(image.info); setThumb(image.src)}}
                            radius="md"
                            src={image.src}
                        /></AspectRatio></Grid.Col>
                    )
                })}
            </Grid>
        </>
    )
}

export default Content