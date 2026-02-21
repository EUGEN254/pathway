// hooks/useBookingForm.js
import { useState, useCallback } from 'react';

const useBookingForm = (initialData = {}) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    travelers: '1 traveler',
    ...initialData
  });

  const updateField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking submitted:', formData);
    // In real app: api.createBooking(formData)
  }, [formData]);

  const isValid = useCallback(() => {
    return formData.checkIn && formData.checkOut && formData.travelers;
  }, [formData]);

  return {
    formData,
    updateField,
    handleSubmit,
    isValid,
  };
};

export default useBookingForm;