import { useState } from 'react';
import { Calendar, Clock, MessageCircle, User } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const BookingWidget = () => {
  const { booking } = siteContent;
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock booked slots (in real app, fetch from backend)
  const bookedSlots = ['2:00 PM', '7:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking process
    setTimeout(() => {
      const message = `Hi! I want to book ${selectedSport} on ${selectedDate} at ${selectedSlot}. Name: ${name || 'Not provided'}`;
      const whatsappUrl = `https://wa.me/${siteContent.whatsappFloat.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 500);
  };

  const isFormValid = selectedSport && selectedDate && selectedSlot && whatsappNumber;

  return (
    <section id="book" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-primary text-sm uppercase tracking-wider mb-3 font-semibold">
            {booking.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text mb-4 tracking-tight">
            {booking.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {booking.subtext}
          </p>
        </div>

        {/* Booking Form Card */}
        <div
          className="bg-surface rounded-2xl p-8 md:p-10 border border-border shadow-2xl"
          data-reveal
          data-delay="200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Sport Selector */}
            <div>
              <label className="flex items-center gap-2 text-text font-semibold mb-3">
                <span className="text-primary">⚡</span>
                {booking.form.sportLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {booking.form.sports.map((sport) => (
                  <button
                    key={sport.id}
                    type="button"
                    onClick={() => setSelectedSport(sport.name)}
                    className={`bg-background border-2 rounded-xl px-6 py-4 cursor-pointer transition-all duration-200 text-left ${
                      selectedSport === sport.name
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-text-muted'
                    }`}
                  >
                    <div className="text-2xl mb-2">{sport.icon}</div>
                    <div className="text-text font-medium">{sport.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="flex items-center gap-2 text-text font-semibold mb-3">
                <Calendar className="text-primary" size={18} />
                {booking.form.dateLabel}
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-background border-2 border-border text-text rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Time Slot Selector */}
            <div>
              <label className="flex items-center gap-2 text-text font-semibold mb-3">
                <Clock className="text-primary" size={18} />
                {booking.form.slotsLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto custom-scrollbar">
                {booking.form.timeSlots.map((slot) => {
                  const isBooked = bookedSlots.includes(slot);
                  const isSelected = selectedSlot === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => !isBooked && setSelectedSlot(slot)}
                      disabled={isBooked}
                      className={`rounded-lg py-3 text-center font-medium transition-all duration-200 ${
                        isBooked
                          ? 'bg-background/50 border-2 border-border/50 text-text-muted/50 cursor-not-allowed line-through'
                          : isSelected
                          ? 'bg-primary text-background font-bold'
                          : 'bg-background border-2 border-border text-text-muted hover:border-primary hover:text-text'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="flex items-center gap-2 text-text font-semibold mb-3">
                <MessageCircle className="text-primary" size={18} />
                {booking.form.whatsappLabel}
              </label>
              <input
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder={booking.form.whatsappPlaceholder}
                className="w-full bg-background border-2 border-border text-text rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors"
                required
              />
              <p className="text-xs text-text-muted mt-1">{booking.form.whatsappHelper}</p>
            </div>

            {/* Name (Optional) */}
            <div>
              <label className="flex items-center gap-2 text-text font-semibold mb-3">
                <User className="text-primary" size={18} />
                {booking.form.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={booking.form.namePlaceholder}
                className="w-full bg-background border-2 border-border text-text rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full bg-primary text-background px-8 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 hover:shadow-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? booking.form.submitting : booking.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
