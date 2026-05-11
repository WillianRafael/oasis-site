import { expect, test } from "@playwright/test";

test.describe("Oasis landing page", () => {
  test("renders the current landing page and keeps hidden sections out of the DOM", async ({ page }, testInfo) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Viagens planejadas com inteligência, curadoria e atenção aos detalhes.",
      }),
    ).toBeVisible();
    await expect(page.getByText("(41) 98771-1041")).toHaveCount(0);
    await expect(page.locator("section#servicos")).toHaveCount(0);
    await expect(page.locator("section#experiencias")).toHaveCount(0);

    const navigation = page.getByRole("navigation", { name: "Seções" });
    if (testInfo.project.name === "mobile-chromium") {
      await expect(navigation.getByRole("link")).toHaveCount(0);
    } else {
      await expect(navigation.getByRole("link")).toHaveText(["Como funciona", "Sobre", "Contato"]);
    }
  });

  test("keeps WhatsApp conversion links active without showing the phone number", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Planejar minha viagem" })).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/5541987711041/,
    );
    await expect(page.getByRole("link", { name: "Começar pelo WhatsApp" })).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/5541987711041/,
    );
  });

  test("shows trust, founder and legal footer information", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Clareza e respaldo para planejar com confiança." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Willian Rafael" })).toBeVisible();
    await expect(page.getByAltText("WR3")).toBeVisible();
    await expect(page.getByText("Certificado Cadastur ativo")).toBeVisible();

    const companyDetails = page.locator(".company-details");
    await companyDetails.getByText("Dados da empresa").click();
    await expect(companyDetails.getByText("55.552.429/0001-83")).toBeVisible();
    await expect(companyDetails.getByText("WR3 CYBERTECH & TRAVEL SOLUTIONS", { exact: true })).toBeVisible();
  });

  test("supports the contact hash and avoids horizontal overflow", async ({ page }) => {
    await page.goto("/#contato");

    await expect(
      page.getByRole("heading", {
        name: "A parte boa da viagem começa quando alguém cuida da complexidade por você.",
      }),
    ).toBeInViewport();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    expect(hasHorizontalOverflow).toBe(false);
  });
});
