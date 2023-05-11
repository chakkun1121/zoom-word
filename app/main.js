"use client";
import { Slider, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Description from "./description";

export default function Main() {
  const [showWord, setShowWord] = useState("");
  const [outputFontSize, setOutputFontSize] = useState(30);
  const [outputSpaceing, setOutputSpaceing] = useState(0);
  function changeOutputFontSize(_, value) {
    setOutputFontSize(value);
  }
  function changeShowWord(e) {
    setShowWord(e.target.value);
  }
  function changeOutputSpaceing(_, value) {
    setOutputSpaceing(value);
  }
  return (
    <main>
      <Description />
      <section>
        <TextField
          label="拡大する文字を入力"
          variant="standard"
          id="input"
          onChange={changeShowWord}
        />
      </section>
      <section id="settings" style={{ padding: "5px" }}>
        {/* フォントサイズ設定 */}
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <p>フォントサイズ</p>
          <Slider
            defaultValue={30}
            onChange={changeOutputFontSize}
            min={10}
            max={100}
          />
        </Stack>
        {/* 文字間隔を設定 */}
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <p>文字間隔</p>
          <Slider
            defaultValue={5}
            onChange={changeOutputSpaceing}
            min={0}
            max={50}
          />
        </Stack>
      </section>
      <section id="output">
        <p
          className="output"
          style={{
            fontSize: outputFontSize,
            letterSpacing: `${outputSpaceing}px`,
          }}
        >
          {showWord}
        </p>
      </section>
      <style jsx>{`
        .output {
          font-family: "UDDigiKyokasho R";
          width: min(100vw, 500px);
          overflow-wrap: break-word;
        }
      `}</style>
    </main>
  );
}
