curl "http://localhost:4741/errands/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "errand": {
      "errand_name": "'"${ERRAND}"'",
      "location": "'"${LOCATION}"'",
      "due_date": "'"${DATE}"'",
      "due_time": "'"${TIME}"'",
      "done_status": "'"${STATUS}"'"
    }
  }'

echo
