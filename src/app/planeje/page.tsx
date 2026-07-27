'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowRight,
  CheckCircle,
  Loader2,
  MapPin,
  Calendar,
  Users,
  DollarSign
} from 'lucide-react';

// Opções dos selects
const tripTypes = [
  { value: 'casal', label: 'Casal' },
  { value: 'lua-de-mel', label: 'Lua de Mel' },
  { value: 'familia', label: 'Família' },
  { value: 'grupo', label: 'Grupo' },
  { value: 'escola', label: 'Escola' },
  { value: 'corporativa', label: 'Corporativa' },
  { value: 'aventura', label: 'Aventura' },
  { value: 'outro', label: 'Outro' },
];

const budgetRanges = [
  { value: 'ate-3k', label: 'Até R$ 3.000' },
  { value: '3k-5k', label: 'R$ 3.000 a R$ 5.000' },
  { value: '5k-10k', label: 'R$ 5.000 a R$ 10.000' },
  { value: 'acima-10k', label: 'Acima de R$ 10.000' },
  { value: 'nao-sei', label: 'Ainda não sei' },
];

const origins = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'google', label: 'Google' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'site', label: 'Site' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'indicacao', label: 'Indicação' },
  { value: 'escola', label: 'Escola' },
  { value: 'parceiro', label: 'Parceiro' },
];

export default function PlanejePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: '',
    tripType: '',
    budgetRange: '',
    notes: '',
    origin: 'site',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validação básica
    if (!formData.name || !formData.whatsapp || !formData.email || !formData.destination) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          travelers: formData.travelers ? parseInt(formData.travelers) : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar formulário');
      }

      setSuccess(true);
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        destination: '',
        travelDate: '',
        travelers: '',
        tripType: '',
        budgetRange: '',
        notes: '',
        origin: 'site',
      });

      // Redirecionar após 3 segundos
      setTimeout(() => {
        router.push('/');
      }, 3000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-[80vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-4 rounded-full bg-success/10 text-success mx-auto w-fit mb-6">
              <CheckCircle className="w-16 h-16" />
            </div>
            <h2 className="heading-md mb-4">Recebemos seu pedido!</h2>
            <p className="text-lg text-text-secondary">
              Em breve nossa equipe entrará em contato para planejar sua viagem.
              <br />
              <span className="text-sm">Você será redirecionado em instantes...</span>
            </p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/planeje-hero.jpg"
            alt="Planeje sua viagem"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">Planeje sua viagem</Badge>
            <h1 className="heading-md text-balance text-white">
              Quero planejar minha viagem
            </h1>
            <p className="text-lg text-white/80 mt-4 max-w-2xl">
              Preencha o formulário abaixo e nossa equipe criará uma proposta personalizada para você.
            </p>
          </div>
        </Container>
      </section>

      {/* Formulário */}
      <section className="section-padding bg-background-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-large p-8 md:p-10">
              {error && (
                <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl text-error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nome completo *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                  <Input
                    label="WhatsApp *"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <Input
                  label="E-mail *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />

                <Input
                  label="Destino desejado *"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Para onde você quer ir?"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Data prevista"
                    name="travelDate"
                    type="date"
                    value={formData.travelDate}
                    onChange={handleChange}
                  />
                  <Input
                    label="Número de viajantes"
                    name="travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={handleChange}
                    placeholder="Quantas pessoas?"
                  />
                  <Select
                    label="Tipo de viagem"
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    options={tripTypes}
                    placeholder="Selecione o tipo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Faixa de investimento"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    options={budgetRanges}
                    placeholder="Quanto pretende investir?"
                  />
                  <Select
                    label="Como nos conheceu?"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    options={origins}
                  />
                </div>

                <Textarea
                  label="Observações"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Conte mais sobre sua viagem dos sonhos..."
                  rows={4}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        QUERO PLANEJAR MINHA VIAGEM
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-center text-xs text-text-tertiary">
                  Ao enviar este formulário, você concorda com nossa{' '}
                  <a href="/politica-privacidade" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
