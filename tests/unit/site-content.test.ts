import { describe, expect, it } from "vitest";

import {
  companyDetails,
  experiences,
  navLinks,
  services,
  showExperiences,
  showServices,
  steps,
  whatsappHref,
  whatsappNumber,
} from "../../src/app/site-content";

describe("site content", () => {
  it("keeps the WhatsApp destination active without exposing the formatted phone number", () => {
    expect(whatsappNumber).toBe("5541987711041");
    expect(whatsappHref).toContain("https://wa.me/5541987711041");
    expect(whatsappHref).toContain("quero%20planejar%20uma%20viagem%20com%20a%20Oasis");
    expect(whatsappHref).not.toContain("(41) 98771-1041");
  });

  it("hides services and experiences from the current navigation", () => {
    expect(showServices).toBe(false);
    expect(showExperiences).toBe(false);
    expect(navLinks.map((link) => link.href)).toEqual(["#processo", "#sobre", "#contato"]);
    expect(navLinks.map((link) => link.label)).not.toContain("Serviços");
    expect(navLinks.map((link) => link.label)).not.toContain("Experiências");
  });

  it("keeps the future services catalog ready to reactivate", () => {
    expect(services.map((service) => service.title)).toEqual([
      "Passagens aéreas",
      "Hotéis e resorts",
      "Cruzeiros",
      "Seguro viagem",
      "Transfer",
      "Aluguel de carro",
    ]);
  });

  it("keeps premium experience entries available for the next design pass", () => {
    expect(experiences).toContain("Lua de mel inesquecível");
    expect(experiences).toContain("Viagens premium sob medida");
  });

  it("keeps the current process copy stable", () => {
    expect(steps).toHaveLength(3);
    expect(steps.map((step) => step.title)).toEqual([
      "Escutamos o que importa",
      "Encontramos a melhor estratégia",
      "Cuidamos da sua viagem",
    ]);
  });

  it("keeps legal company data available for the footer", () => {
    expect(companyDetails).toEqual({
      legalName: "WILLIAN RAFAEL ROVILLER REIS TECNOLOGIA DA INFORMACAO LTDA",
      cnpj: "55.552.429/0001-83",
      tradeName: "WR3 CYBERTECH & TRAVEL SOLUTIONS",
    });
  });
});
