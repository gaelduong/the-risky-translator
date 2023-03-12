const S3_BASE_AUDIO_URL =
  'https://words-audios.s3.ap-southeast-1.amazonaws.com/audios'

enum ANSWER_RESULT {
  CORRECT,
  INCORRECT
}

enum CHALLENGES {
  CONSECUTIVE,
  PERCENTAGE
}
export { S3_BASE_AUDIO_URL, ANSWER_RESULT, CHALLENGES }
