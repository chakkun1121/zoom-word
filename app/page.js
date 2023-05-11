"use client";
import { Slider, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [showWord, setShowWord] = useState("");
  const [outputFontSize, setOutputFontSize] = useState(30);
  function changeOutputFontSize(_, value) {
    setOutputFontSize(value);
  }
  function changeShowWord(e) {
    setShowWord(e.target.value);
  }
  return (
    <>
      <section>
        <TextField
          label="拡大文字を入力"
          variant="standard"
          id="input"
          onChange={changeShowWord}
        />
        {/* フォントサイズ設定 */}
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider defaultValue={30} onChange={changeOutputFontSize} />
        </Stack>
      </section>
      <section id="output">
        <p
          style={{
            fontSize: outputFontSize,
            fontFamily: "UDDigiKyokasho R",
          }}
        >
          {showWord}
        </p>
      </section>
    </>
  );
}
