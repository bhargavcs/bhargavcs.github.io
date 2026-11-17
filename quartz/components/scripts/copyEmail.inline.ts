document.addEventListener("nav", () => {
  for (const contact of document.querySelectorAll<HTMLElement>(".email-contact")) {
    const button = contact.querySelector<HTMLButtonElement>(".copy-email")
    const address = contact.querySelector<HTMLElement>("[data-email-address]")
    const status = contact.querySelector<HTMLElement>(".copy-email-status")
    if (!button || !address || !status) continue

    let resetTimer: ReturnType<typeof setTimeout> | undefined
    const copy = async () => {
      clearTimeout(resetTimer)
      try {
        await navigator.clipboard.writeText(address.textContent?.trim() ?? "")
        status.textContent = "Copied!"
      } catch {
        status.textContent = "Couldn’t copy. Please select and copy the address."
      }
      resetTimer = setTimeout(() => {
        status.textContent = ""
      }, 5000)
    }

    button.addEventListener("click", copy)
    window.addCleanup(() => {
      button.removeEventListener("click", copy)
      clearTimeout(resetTimer)
    })
  }
})
