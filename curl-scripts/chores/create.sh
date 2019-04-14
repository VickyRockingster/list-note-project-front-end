curl "http://localhost:4741/chores" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "chore": {
      "chore_name": "'"${CHORE}"'",
      "due_date": "'"${DATE}"'",
      "due_time": "'"${TIME}"'",
      "done_status": "'"${STATUS}"'"
    }
  }'

echo
