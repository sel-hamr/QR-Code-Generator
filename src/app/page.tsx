"use client";
import { SelectSize } from "@/components/select-size";
import { ShowQRcode } from "@/components/show-qrcode";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateQRCodeImg, generateQRCodeSVG } from "@/lib/utils";
import React from "react";

export default function Home() {
  const [url, setUrl] = React.useState("");
  const [size, setSize] = React.useState("");
  const [qrCode, setQrCode] = React.useState({
    img: "",
    svg: "",
  });
  const generateQRCode = async () => {
    const QRCode = await generateQRCodeImg(url, parseInt(size));
    const QRCodeSVG = await generateQRCodeSVG(url, parseInt(size));
    setQrCode({ img: QRCode, svg: QRCodeSVG });
  };
  const disableButton = url === "" || size === "";
  return (
    <main className="flex min-h-screen flex-col items-center  md:justify-between justify-center container md:mt-24 ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">QR Code Generator</CardTitle>
          <CardDescription>
            Generate QR Codes effortlessly with our intuitive interface. Access
            a free plan that never expires! Customize your QR Codes
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Url</Label>
            <Input
              id="url"
              type="text"
              placeholder="https://example.com"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">size</Label>
            <SelectSize setSize={setSize} />
          </div>
        </CardContent>
        <CardFooter>
          <ShowQRcode
            QRcode={qrCode}
            generateQRCode={generateQRCode}
            disableButton={disableButton}
          />
        </CardFooter>
      </Card>
    </main>
  );
}
