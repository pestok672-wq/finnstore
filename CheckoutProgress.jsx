import React from 'react';
import Icon from '../../../components/AppIcon';

const CheckoutProgress = ({ currentStep, completedSteps }) => {
  const steps = [
    { id: 1, name: 'Pilih Game', icon: 'Gamepad2' },
    { id: 2, name: 'Pilih Nominal', icon: 'Zap' },
    { id: 3, name: 'Info Akun', icon: 'User' },
    { id: 4, name: 'Pembayaran', icon: 'CreditCard' },
    { id: 5, name: 'Konfirmasi', icon: 'CheckCircle' }
  ];

  const getStepStatus = (stepId) => {
    if (completedSteps?.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-gaming mb-6">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Proses Checkout</h3>
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => {
          const status = getStepStatus(step?.id);
          
          return (
            <React.Fragment key={step?.id}>
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  status === 'completed' 
                    ? 'bg-success text-white' 
                    : status === 'current' ?'bg-primary text-white' :'bg-muted text-text-secondary'
                }`}>
                  {status === 'completed' ? (
                    <Icon name="Check" size={16} />
                  ) : (
                    <Icon name={step?.icon} size={16} />
                  )}
                </div>
                
                <div className="text-center">
                  <div className={`text-xs font-medium ${
                    status === 'completed' || status === 'current'
                      ? 'text-text-primary' :'text-text-secondary'
                  }`}>
                    {step?.name}
                  </div>
                </div>
              </div>
              {index < steps?.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all duration-200 ${
                  completedSteps?.includes(step?.id) 
                    ? 'bg-success' :'bg-border'
                }`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-text-secondary">
          Langkah {currentStep} dari {steps?.length}
        </p>
      </div>
    </div>
  );
};

export default CheckoutProgress;