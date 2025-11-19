#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
RESET='\033[0m'

clear

show_banner() {
  echo ""
  echo -e "${CYAN}╔═══════════════════════════════════════════════╗${RESET}"
  echo -e "${CYAN}║${GREEN}              Inetum React Training            ${CYAN}║${RESET}"
  echo -e "${CYAN}║${YELLOW}                (Quick launcher)               ${CYAN}║${RESET}"
  echo -e "${CYAN}║${MAGENTA}                    v 1.0.0                    ${CYAN}║${RESET}"
  echo -e "${CYAN}╚═══════════════════════════════════════════════╝${RESET}"
  echo ""
}

progress_bar() {
  local duration=$1
  local steps=20
  local interval=$(awk "BEGIN {print $duration / $steps}")

  echo -n "["
  for ((i = 0; i < steps; i++)); do
    echo -ne "${GREEN}#${RESET}"
    sleep "$interval"
  done
  echo "]"
}

install_dependencies() {
  echo -e "${YELLOW}Installing dependencies...${RESET}"
  echo -n "Backend: "
  progress_bar 2
  (cd backend && pnpm install --silent)
  echo ""
  echo -n "Frontend: "
  progress_bar 2
  (cd frontend && pnpm install --silent)
  echo -e "${GREEN}Installation complete!${RESET}"
  sleep 1
}

run_storybook() {
  (cd frontend && npm run storybook) &
  PID_STORYBOOK=$!
}

run_backend() {
  (cd backend && npm run dev) &
  PID_BACKEND=$!
}

run_frontend() {
  (cd frontend && npm run dev) &
  PID_FRONTEND=$!
}

run_all() {
  run_backend
  run_frontend
  trap "echo; echo -e '${RED}Stopping servers...${RESET}'; kill $PID_BACKEND $PID_FRONTEND 2>/dev/null; exit 0" SIGINT
  wait
}

install_and_start() {
  clear
  show_banner
  install_dependencies
  clear
  show_banner
  echo -e "${CYAN}Starting both dev servers...${RESET}"
  echo ""
  run_all
}

main_menu() {
  clear
  show_banner
  echo -e "${GREEN}1) ➜  Install dependencies and start both servers${RESET}"
  echo -e "${GREEN}2) ➜  Run Storybook${RESET}"
  echo -e "${GREEN}3) ➜  Run all (FE+BE without installing)${RESET}"
  echo -e "${GREEN}4) ➜  Run frontend only${RESET}"
  echo -e "${GREEN}5) ➜  Run backend only${RESET}"
  echo -e "${GREEN}6) ➜  Exit${RESET}"
  echo ""
  read -rp "Select an option (1-6): " choice

  case $choice in
    1)
      install_and_start
      ;;
    2)
      echo -e "${CYAN}Starting Storybook...${RESET}"
      run_storybook
      trap "echo; echo -e '${RED}Stopping Storybook...${RESET}'; kill $PID_STORYBOOK 2>/dev/null; exit 0" SIGINT
      wait
      ;;
    3)
      echo -e "${CYAN}Starting both dev servers...${RESET}"
      run_all
      ;;
    4)
      echo -e "${CYAN}Starting frontend...${RESET}"
      run_frontend
      trap "echo; echo -e '${RED}Stopping frontend...${RESET}'; kill $PID_FRONTEND 2>/dev/null; exit 0" SIGINT
      wait
      ;;
    5)
      echo -e "${CYAN}Starting backend...${RESET}"
      run_backend
      trap "echo; echo -e '${RED}Stopping backend...${RESET}'; kill $PID_BACKEND 2>/dev/null; exit 0" SIGINT
      wait
      ;;
    6)
     echo ""
      echo -e "${RED}Exiting...${RESET}"
      exit 0
      ;;
    *)
      echo ""
      echo -e "${RED}Invalid option. Try again.${RESET}"
      sleep 1
      main_menu
      ;;
  esac
}

main_menu
