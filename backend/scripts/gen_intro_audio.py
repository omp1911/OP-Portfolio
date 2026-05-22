"""One-off script: generate the intro voice-over MP3 and save into the frontend public folder.

Run: python /app/backend/scripts/gen_intro_audio.py
Output: /app/frontend/public/audio/intro.mp3
"""
import asyncio
import os
import sys
from pathlib import Path

from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

from emergentintegrations.llm.openai import OpenAITextToSpeech  # noqa: E402

TEXT = (
    "Hi, I am Om. I build clean, production data systems using the modern data stack. "
    "Nice to e-meet you. Scroll down to know more about me."
)
OUT = Path("/app/frontend/public/audio/intro.mp3")


async def main() -> None:
    key = os.getenv("EMERGENT_LLM_KEY")
    if not key:
        print("EMERGENT_LLM_KEY missing", file=sys.stderr)
        sys.exit(1)

    tts = OpenAITextToSpeech(api_key=key)
    audio = await tts.generate_speech(
        text=TEXT,
        model="tts-1-hd",
        voice="onyx",
        speed=1.0,
        response_format="mp3",
    )
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_bytes(audio)
    print(f"Wrote {len(audio)} bytes to {OUT}")


if __name__ == "__main__":
    asyncio.run(main())
