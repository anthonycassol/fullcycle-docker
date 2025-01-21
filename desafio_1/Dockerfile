FROM golang:1.22-alpine as builder

WORKDIR /app

COPY . .

RUN go build -o /main main.go


FROM scratch

WORKDIR /

COPY --from=builder /main /main

CMD ["./main"]