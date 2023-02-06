import { IEvent } from '@/types/event';
import { checkIfDateIsValid } from '@/utils/date';
import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Field, Formik, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';

const EventSchema = Yup.object().shape({
  eventName: Yup.string()
    .min(2, 'Your event name is too short.')
    .max(15, 'Your event name is too long')
    .required('Event Name Is Required'),
  day: Yup.number()
    .min(1, 'Day must be between 1 and 31')
    .max(31, 'Day must be between 1 and 31')
    .required('Day is required'),
  month: Yup.number()
    .min(1, 'Month must be between 1 and 31')
    .max(12, 'Month must be between 1 and 12')
    .required('Month is required'),
  year: Yup.number()
    .required('Year is required')
    .positive('Year must be positive')
    .integer()
    .min(new Date().getFullYear(), 'Year must be current year or greater')
    .max(new Date().getFullYear() + 5, 'Year must be less than 5 years ahead'),
  hour: Yup.number().min(0).max(23),
  min: Yup.number().min(0).max(59),
});

type EventProps = {
  eventName: string;
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
  hour: number | undefined;
  min: number | undefined;
};

export const NewEventCard = () => {
  return (
    <Card variant="outline" size="sm">
      <CardHeader p={4}>
        <Heading size="md" textAlign="center">
          Create Your Event
        </Heading>
      </CardHeader>
      <CardBody>
        <Formik
          initialValues={{
            eventName: '',
            day: '',
            month: '',
            year: '',
            hour: '',
            min: '',
          }}
          validationSchema={EventSchema}
          onSubmit={(values, actions) => {
            const year = Number(values.year);
            const month = Number(values.month);
            const day = Number(values.day);

            const date = new Date(year, month - 1, day);
            if (values.hour != '' && values.min != '') {
              date.setHours(Number(values.hour), Number(values.min));
            }

            const isDateValid = checkIfDateIsValid(date, year, month, day);
            if (!isDateValid) {
              actions.setErrors({ day: 'Invalid Date' });
              actions.setSubmitting(false);
            }

            const newEvent: IEvent = {
              date,
              eventName: values.eventName,
            };

            // TODO: add context logic to add event

            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({ handleSubmit, errors, touched }) => {
            function isDateInvalid(
              errors: FormikErrors<EventProps>,
              touched: FormikTouched<EventProps>,
            ): boolean | undefined {
              const isDayError = !!errors.day && touched.day;
              const isMonthError = !!errors.month && touched.month;
              const isYearError = !!errors.year && touched.year;

              return isDayError || isMonthError || isYearError;
            }

            function isHourInvalid(
              errors: FormikErrors<EventProps>,
              touched: FormikTouched<EventProps>,
            ): boolean | undefined {
              const isHourError = !!errors.hour && touched.hour;
              const isMinError = !!errors.min && touched.min;

              return isHourError || isMinError;
            }

            return (
              <form onSubmit={handleSubmit} id="event-form">
                <FormControl
                  isInvalid={!!errors.eventName && touched.eventName}
                >
                  <Field
                    as={Input}
                    id="eventName"
                    name="eventName"
                    type="text"
                    variant="filled"
                    placeholder="Event Name"
                  />
                  <FormErrorMessage>{errors.eventName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={isDateInvalid(errors, touched)}>
                  <SimpleGrid
                    templateColumns="repeat(5, minmax(0, auto))"
                    alignItems="center"
                    gap={4}
                    mt={5}
                  >
                    <Field
                      as={Input}
                      id="day"
                      name="day"
                      type="number"
                      variant="filled"
                      placeholder="Day"
                    />
                    <Text>/</Text>
                    <Field
                      as={Input}
                      id="month"
                      name="month"
                      type="number"
                      variant="filled"
                      placeholder="Month"
                    />
                    <Text>/</Text>
                    <Field
                      as={Input}
                      id="year"
                      name="year"
                      type="number"
                      variant="filled"
                      placeholder="Year"
                    />
                  </SimpleGrid>
                  <FormErrorMessage pl={1}>
                    {errors.day || errors.month || errors.year}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={isHourInvalid(errors, touched)}>
                  <SimpleGrid
                    templateColumns="repeat(3, minmax(0, auto))"
                    gap={4}
                    mt={5}
                    alignItems="center"
                  >
                    <Field
                      as={Input}
                      id="hour"
                      name="hour"
                      type="number"
                      variant="filled"
                      placeholder="Hour"
                    />
                    <Text>:</Text>
                    <Field
                      as={Input}
                      id="min"
                      name="min"
                      type="number"
                      variant="filled"
                      placeholder="Min"
                    />
                  </SimpleGrid>
                  <Text pt={2} pl={2} fontSize="xs" w="100%">
                    Hour and Minutes are optional.
                  </Text>
                  <FormErrorMessage pl={1}>
                    {errors.hour || errors.min}
                  </FormErrorMessage>
                </FormControl>
              </form>
            );
          }}
        </Formik>
      </CardBody>
    </Card>
  );
};
