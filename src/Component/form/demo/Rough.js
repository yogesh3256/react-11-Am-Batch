import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addDays, endOfMonth, endOfWeek, addMonths } from 'date-fns';
import DatePickerField from '../../../../common/FormFields/DatePickerField';

const Rough = () => {
    const { control, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            period: 'monthly',
            fromDate: new Date(),
            toDate: endOfMonth(new Date())
        }
    });

    const period = watch('period');
    const fromDate = watch('fromDate');

    useEffect(() => {
        const updateDates = () => {
            const today = new Date();
            let fromDate = today;
            let toDate;

            switch (period) {
                case 'monthly':
                    toDate = endOfMonth(today);
                    break;
                case 'fortnightly':
                    toDate = addDays(today, 14);
                    break;
                case 'bimonthly':
                    toDate = addMonths(today, 2);
                    break;
                case 'weekly':
                    toDate = endOfWeek(today);
                    break;
                case 'daily':
                    toDate = today;
                    break;
                default:
                    toDate = endOfMonth(today);
            }

            setValue('fromDate', fromDate);
            setValue('toDate', toDate);
        };

        updateDates();
    }, [period, setValue]);

    return (
        <form>
            <div>
                <label>Period</label>
                <select {...control.register("period")}>
                    <option value="monthly">Monthly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="bimonthly">Bimonthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                </select>
            </div>
            <div>
                <label>From Date</label>
                <DatePickerField
                    name="fromDate"
                    disablePast={true}
                    control={control}
                    label="From Date"
                    inputFormat="dd-MM-yyyy"
                    slotProps={{ textField: { size: "small" } }}
                    error={errors?.fromDate}
                />
            </div>
            <div>
                <label>To Date</label>
                <DatePickerField
                    name="toDate"
                    disablePast={true}
                    control={control}
                    label="To Date"
                    inputFormat="dd-MM-yyyy"
                    minDate={fromDate}
                    slotProps={{ textField: { size: "small" } }}
                    error={errors?.toDate}
                />
            </div>
        </form>
    );
};

export default Rough;
